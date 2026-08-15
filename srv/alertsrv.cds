service Email_Alert_SRV @(
    path: '/email_alert_srv',
    impl: './alertsrv.js'
){
    @open type object {};
    action postAlert (payload: object) returns object;
}