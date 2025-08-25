import ProfileCard from "../common/profile/profile";
import ProfilePhoto from "@/assets/profile.jpg";

const ProfileShowcase = () => {
  const userData = {
    name: "Intan Fauziah",
    role: "Cashier",
    avatar: ProfilePhoto,
    clockIn: "08:24",
    clockOut: undefined,
  };

  return (
    <ProfileCard
      user={userData}
      onProfileClick={() => console.log("Profile clicked")}
      onSettingsClick={() => console.log("Settings clicked")}
      onEndShiftClick={() => console.log("End shift clicked")}
    />
  );
};

export default ProfileShowcase;
