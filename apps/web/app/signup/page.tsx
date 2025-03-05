import Link from "next/link";
import Form from "../_components/Form";
import FormRow from "../_components/FormRow";
import Input from "../_components/Input";
import FlexBox from "../_components/FlexBox";
import { Icon } from "@iconify/react/dist/iconify.js";

function page() {
  async function action() {
    "use server";
  }

  return (
    <main className="flex h-screen min-h-[40rem] items-center justify-center">
      <Form action={action} className="min-w-[65rem] p-14">
        <FlexBox className="mx-auto mb-5 w-[41rem] justify-between gap-10">
          <Link
            className="border-brand-300 text-brand-400 hover:border-brand-600 hover:text-brand-600 box-border flex w-[50%] justify-center border-b-2 py-3 text-[2rem] font-light transition-all duration-300"
            href="/login"
          >
            Log in
          </Link>
          <button
            type="button"
            className="border-brand-600 text-brand-600 box-border w-[50%] border-b-4 py-3 text-[2rem] font-bold"
          >
            Get Started
          </button>
        </FlexBox>

        <div className="grid grid-cols-2 gap-10">
          <FormRow label="Username">
            <Input />
          </FormRow>

          <FormRow label="Email">
            <Input />
          </FormRow>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <FormRow label="Password">
            <Input type="password" />
          </FormRow>

          <FormRow label="Reapeat password">
            <Input type="password" />
          </FormRow>
        </div>

        <FlexBox className="text-brand-600 mt-4 items-center gap-2 text-xl">
          <input type="checkbox" className="size-6" />
          <p>Agree with</p>
          <Link href="/privacypolicy" className="font-semibold hover:underline">
            privacy policy
          </Link>
        </FlexBox>

        <FlexBox className="mt-14 flex-col items-center">
          <button className="bg-brand-600 hover:bg-brand-700 w-[35rem] cursor-pointer rounded-lg py-4 text-[1.6rem] text-white transition-all duration-300">
            Sign up
          </button>
          <span className="text-brand-600 my-5 text-[2rem] font-medium">
            or
          </span>
          <FlexBox className="h-10 gap-28">
            <Icon
              icon="flat-color-icons:google"
              className="cursor-pointer text-[3.5rem]"
            />

            <Icon icon="uil:github" className="cursor-pointer text-[3.5rem]" />
          </FlexBox>
        </FlexBox>
      </Form>
    </main>
  );
}

export default page;
