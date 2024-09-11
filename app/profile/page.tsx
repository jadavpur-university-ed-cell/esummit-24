import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const Profile = async () => {
  const session = await auth();
  return (
    <div>
      <span className="text-white">{JSON.stringify(session)}</span>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" className="">
          Log Out
        </Button>
      </form>
    </div>
  );
};

export default Profile;
