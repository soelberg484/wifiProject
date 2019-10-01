import React, { useEffect } from 'react';

const contentful = require('contentful')

const ContentfulService = (contentType: string) => {
    var client = contentful.createClient({
        space: 'xtsdk79cmd4d',
        accessToken: '9a7a0231ec319f18fab74119fa47a90385eb59125bfcace620eca25056369b6e',
        environment: 'WiFiPortal'
    })

    var content = ""
    useEffect(() => {
        client.getEntries({
            'content_type': contentType
        })
            .then(function (entries: any) {
                console.log(JSON.stringify(entries))
                entries.items.forEach(function (entry: any) {
                    content = entry.fields
                    console.log(":(")
                })
            })
    }, [])
    return content
}
export default ContentfulService