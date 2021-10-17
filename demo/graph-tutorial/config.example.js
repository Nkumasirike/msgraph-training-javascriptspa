// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <msalConfigSnippet>
const msalConfig = {
  auth: {
    clientId: '8c6ca043-6a59-439c-a753-b7011ce76e92',
    redirectUri: 'http://localhost:5501/'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'User.Read.All',
    'calendars.readwrite'
  ]
}
// </msalConfigSnippet>
