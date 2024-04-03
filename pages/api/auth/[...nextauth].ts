import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers/discord'
import CredentialsProvider from "next-auth/providers/credentials";
import getUser from "@/lib/GetUser";
import InsertUser from "@/services/insert_user";

// const handler = NextAuth({
//     session: {
//         strategy:'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             // The name to display on the sign in form (e.g. "Sign in with...")
//             name: "Credentials",
//             // `credentials` is used to generate a form on the sign in page.
//             // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 email: {},
//                 password: {}
//             },
//             async authorize(credentials, req) {
//                 if(credentials?.email === process.env.email && credentials?.password === process.env.password)
//                     return {id:'1', name: credentials?.email.split('@')[0], email:credentials?.email}

//                return null;

//             }
//         })
//     ]
// })

// export default handler;


const scopes = ['identify'].join(' ')
export default NextAuth({
    providers: [
        Providers({
            clientId: process.env.CLIENTID+'',
            clientSecret: process.env.CLIENTSECRET+'',
            authorization: {params:{scope: scopes}},
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me",
        })
    ],
    callbacks: {
        jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
          }
          return token
        },
        async session({ session, token }) {
            const user = await getUser(token.accessToken as string);
            await InsertUser({id:user.id, avatar:user.avatar, name:user.username, connectionId:''});
            session.user = user;
            return session;
          },
      }
});