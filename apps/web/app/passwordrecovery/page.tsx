import Form from "../_components/Form";
import FormRow from "../_components/FormRow";
import Input from "../_components/Input";
import FlexBox from "../_components/FlexBox";
import Link from "next/link";

function page() {
  async function action() {
    "use server";
  }

  return (
    <main className="flex h-screen min-h-[40rem] items-center justify-center">
      <Form action={action}>
        <h1 className="text-brand-600 flex justify-center pt-5 pb-10 text-4xl font-medium">
          Password recovery
        </h1>

        <FormRow label="Email">
          <Input />
        </FormRow>

        <FlexBox className="mt-8 flex-col items-center">
          <button className="bg-brand-600 hover:bg-brand-700 w-full cursor-pointer rounded-lg py-3 text-lg text-white transition-all duration-300">
            Send recovery link
          </button>
          <Link
            href="/login"
            className="text-brand-600 my-5 text-xl font-medium hover:underline"
          >
            Go back
          </Link>
        </FlexBox>
      </Form>
    </main>
  );
}

export default page;
