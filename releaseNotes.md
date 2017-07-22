Platform API version: 1387


# Major Changes (0 changes)


# Minor Changes (21 changes)

**/api/v2/voicemail/messages/{messageId}** (1 change)

* Operation patch was added. Summary: Update a voicemail message

**/api/v2/license/toggles/{featureName}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**OutOfOffice** (1 change)

* Optional property indefinite was added

**Edge** (1 change)

* Optional property offlineConfigCalled was added

**OrgOAuthClient** (4 changes)

* Optional property dateCreated was added
* Optional property dateModified was added
* Optional property createdBy was added
* Optional property modifiedBy was added

**OAuthClient** (4 changes)

* Optional property dateCreated was added
* Optional property dateModified was added
* Optional property createdBy was added
* Optional property modifiedBy was added

**OAuthClientListing** (4 changes)

* Optional property dateCreated was added
* Optional property dateModified was added
* Optional property createdBy was added
* Optional property modifiedBy was added

**VoicemailMessage** (1 change)

* Optional property retentionPolicy was added

**VoicemailRetentionPolicy** (1 change)

* Model was added

**LicenseOrgToggle** (1 change)

* Model was added


# Point Changes (7 changes)

**GET /api/v2/voicemail/messages/{messageId}/media** (1 change)

* Summary was changed

**GET /api/v2/voicemail/messages/{messageId}** (1 change)

* Summary was changed

**PUT /api/v2/voicemail/messages/{messageId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/voicemail/messages/{messageId}** (2 changes)

* Description was changed
* Summary was changed

**PUT /api/v2/users/{userId}/outofoffice** (1 change)

* Description was changed for parameter body
