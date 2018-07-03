const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default (emails) => {
    
    let invalidEmails = 0
    
    if (emails.length > 1)
        invalidEmails = emails
            .split(',')
            .map(email => email.trim())
            .filter(email => !re.test(email))
    else 
        invalidEmails = emails
            .split()
            .map(email => email.trim())
            .filter(email => !re.test(email))


    if (invalidEmails.length)
        return `Some invalid emails: ${invalidEmails}`

    return
}