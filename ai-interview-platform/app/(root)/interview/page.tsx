import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <p>Loading user data...</p>; // or handle no user case
  }

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user.name}          // safe now
        userId={user.id}
        type="generate"
      />
    </>
  );
};

export default Page;
