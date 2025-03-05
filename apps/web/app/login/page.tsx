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
      <Form action={action} className="min-w-[46rem] px-20 py-14">
        <FlexBox className="mx-auto mb-5 justify-between gap-10">
          <button
            type="button"
            className="border-brand-600 text-brand-600 box-border w-[50%] border-b-4 py-3 text-[2rem] font-bold"
          >
            Log in
          </button>
          <Link
            className="border-brand-300 text-brand-400 hover:border-brand-600 hover:text-brand-600 box-border flex w-[50%] justify-center border-b-2 py-3 text-[2rem] font-light transition-all duration-300"
            href="/signup"
          >
            Get Started
          </Link>
        </FlexBox>

        <FormRow label="Email">
          <Input />
        </FormRow>

        <FormRow label="Password">
          <Input type="password" />
        </FormRow>

        <Link
          href="passwordrecovery"
          className="text-brand-700 mt-2 inline-block text-[1.13rem] hover:underline"
        >
          Forgot password?
        </Link>

        <FlexBox className="mt-14 flex-col items-center">
          <button className="bg-brand-600 hover:bg-brand-700 w-[35rem] cursor-pointer rounded-lg py-4 text-[1.6rem] text-white transition-all duration-300">
            Log in
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
