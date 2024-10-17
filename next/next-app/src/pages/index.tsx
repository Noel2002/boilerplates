import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.get("/api/todos");
    console.log(res.data);
  }
  return (
    <main className=" min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>BoilerPlate</title>
      </Head>
      <p className=" font-bold text-xl">BoilerPlate.</p>
      <form onSubmit={handleSubmit} className=" space-y-5 border min-w-[400px] py-10 px-8 rounded-md">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button type="submit" className=" w-full text-center">Sign in</Button>
      </form>
    </main>
  );
}
