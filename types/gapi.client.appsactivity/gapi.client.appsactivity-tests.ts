/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('appsactivity', 'v1', () => {
        /** now we can use gapi.client.appsactivity */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View the activity history of your Google apps */
            'https://www.googleapis.com/auth/activity',
            /** View and manage the files in your Google Drive */
            'https://www.googleapis.com/auth/drive',
            /** View and manage metadata of files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata',
            /** View metadata for files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata.readonly',
            /** View the files in your Google Drive */
            'https://www.googleapis.com/auth/drive.readonly',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was
         * acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is
         * scoped to activities from a given Google service using the source parameter.
         */
        await gapi.client.activities.list({
            "drive.ancestorId": "drive.ancestorId",
            "drive.fileId": "drive.fileId",
            groupingStrategy: "groupingStrategy",
            pageSize: 4,
            pageToken: "pageToken",
            source: "source",
            userId: "userId",
        });
    }
});
