import Config from "react-native-config";

const signer = {
    name: 'John Doe',
    email: 'john@example.com',
    clientUserId: '1234',
    roleName: 'Patient',
    recipientId: '1',
};

async function getOAuthToken(): Promise<string> {
    const result = await fetch(`https://${Config.AUTH_SERVER}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${Config.ASSERTION}`,
    });

    const data = await result.json();
    if (data.access_token) return data.access_token;
    throw new Error(`Failed to get access token: ${JSON.stringify(data)}`);
}

async function createEnvelope(accessToken: string): Promise<string> {
    const body = {
        "compositeTemplates": [
            {
                "serverTemplates": [
                    {
                        "sequence": "1",
                        "templateId": `${Config.TEMPLATE_ID}`
                    }
                ],
                "inlineTemplates": [
                    {
                        "recipients": {
                            "signers": [
                                {
                                    ...signer,
                                    "identityVerification": {
                                        "workflowId": `${Config.SMS_WORKFLOW_ID}`,
                                        "steps": null,
                                        "inputOptions": [
                                            {
                                                "name": "phone_number_list",
                                                "valueType": "PhoneNumberList",
                                                "phoneNumberList": [
                                                    {
                                                        "countryCode": `${Config.PHONE_COUNTRY_CODE}`,
                                                        "number": `${Config.PHONE_NUMBER}`
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "sequence": "2"
                    }
                ]
            }
        ],
        "status": "sent"
    }

    const result = await fetch(`${Config.DOCUSIGN_BASE_PATH}/v2.1/accounts/${Config.ACCOUNT_ID}/envelopes`,
    {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const json = await result.json();
    if (!result.ok) throw new Error(`Create Envelope Error: ${JSON.stringify(json)}`);
    return json.envelopeId;
}

async function generateRecipientViewUrl(accessToken: string, envelopeId: string): Promise<string> {
    const viewRequest = {
        returnUrl: Config.RETURN_URL,
        email: signer.email,
        userName: signer.name,
        clientUserId: signer.clientUserId,
        authenticationMethod: 'none'
    };

    const result = await fetch(`${Config.DOCUSIGN_BASE_PATH}/v2.1/accounts/${Config.ACCOUNT_ID}/envelopes/${envelopeId}/views/recipient`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(viewRequest),
    });

    const json = await result.json();
    if (!result.ok) throw new Error(`Recipient View Error: ${JSON.stringify(json)}`);
    return json.url;

}

export async function getEmbeddedSigningUrl() {
    try {
        const accessToken = await getOAuthToken();
        const envelopeId = await createEnvelope(accessToken);
        const embeddedSigningUrl = await generateRecipientViewUrl(accessToken, envelopeId);
        return embeddedSigningUrl;
    } catch (err) {
        console.error('Error generating signing URL:', err);
    }
}
