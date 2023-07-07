import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import User from "@/model/User";
// import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect();

        try{
          const user = await User.findOne({
            email: credentials.email,
          });

          if(user){
            //checking the password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
              )


            if (isPasswordCorrect) {
              return user;
            } else{
              throw new Error("Wrong Credentials!")
            }
          } else {
            throw new Error("User not found!")
          }
        }catch(err){
          throw new Error(err)
        }
      }
    }),
  ],
  pages:{
    error:"/dashboard/login",
  }
})

//when we fetch session or user info it is a get method, when we pass username and password it is a post method
export { handler as GET, handler as POST }