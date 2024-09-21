import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import UserProfile from "@/components/Dashboard/Participant/UserProfile";
import {currentUser} from "@/lib/auth"
const Profile = async () => {
  const session = await auth();
  return (
    <div>
      <span className="text-white">{JSON.stringify(session)}</span>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/sign-in", redirect: true });
        }}
      >
        <Button type="submit" variant="outline">
          Log Out
        </Button>
      </form>
      { session && 
      <UserProfile userId={session?.user.id} /> }
    </div>
  );
};

export default Profile;
