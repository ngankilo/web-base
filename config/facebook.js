module.exports = {
    url    : process.env.FACEBOOK_URL || 'https://graph.facebook.com/',
    version: process.env.FACEBOOK_VERSION || 'v2.12',
    avatar : process.env.FACEBOOK_AVATAR || 'large',
    profile: ['email', 'name', 'link', 'gender', 'locale', 'picture', 'birthday', 'website']
};