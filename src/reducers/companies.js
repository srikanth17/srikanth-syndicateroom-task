const initialState = {
    "opportunities": [
        {
            "company": "Company X",
            "tradingActive": true,
            "averageInvestment": 9014,
            "totalRaised": 540493,
            "eis": true,
            "seis": false
        },
        {
            "company": "ACME Corp",
            "tradingActive": false,
            "averageInvestment": 4029,
            "totalRaised": 2441337,
            "eis": true,
            "seis": true
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};