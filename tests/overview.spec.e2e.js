module.exports = {
    // Tests

    'Change terminal name': function(client){
        client
            .url('http://admin:admin@192.168.0.1')
            .waitForElementVisible('frameset', 1000)
            .frame('bottomLeftFrame')
            .click('#a10')
            .frame()
            .frame('mainFrame')
            .waitForElementVisible('#ssid',1000)
            .clearValue('#ssid')
            .setValue('#ssid',['terminal-'+ process.argv[2],client.Keys.ENTER] )
    },

    'Change password 2': function(client){
    client
        .frame()
        .frame('bottomLeftFrame')
        .click('#a12')
        .frame()
        .frame('mainFrame')
        .click('#secType')
        .setValue('#pskSecret',['1234567890', client.Keys.ENTER])
        .pause(1000)
        .acceptAlert()
},
    'Only WAN': function(client){
        client
            .frame()
            .frame('bottomLeftFrame')
            .click('#a3')
            .frame()
            .frame('mainFrame')
            .click('input[value="3"]')
            .click('input[name=Save]')
    },

    'Change password': function(client){
        client
            .frame()
            .frame('bottomLeftFrame')
            .click('#a46')
            .click('#a53')
            .frame()
            .frame('mainFrame')
            .setValue('input[name=oldname]','admin')
            .setValue('input[name=oldpassword]','admin')
            .setValue('input[name=newname]','qwerty')
            .setValue('input[name=newpassword]','1234')
            .setValue('input[name=newpassword2]',['1234', client.Keys.ENTER])
            .end()
    }

};