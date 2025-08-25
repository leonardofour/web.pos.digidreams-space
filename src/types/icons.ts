import Play from "@/assets/icons/play.svg";
import PlayDark from "@/assets/icons/play-dark.svg";
import Stop from "@/assets/icons/stop.svg";
import StopDark from "@/assets/icons/stop-dark.svg";
import Logo from "@/assets/logo.png";
import LogoDark from "@/assets/logo-dark.png";
import EditIcon from "@/assets/icons/edit.svg";
import EditIconDark from "@/assets/icons/edit-dark.svg";
import Reset from "@/assets/icons/reset.svg";
import ResetDark from "@/assets/icons/reset-dark.svg";
import PlusDark from "@/assets/icons/plus-dark.svg"
import MinDark from "@/assets/icons/min-dark.svg"
// import Close from "@/assets/icons/close.svg"
import CloseDark from "@/assets/icons/close-dark.svg"

export const icons = {
  play: { light: Play, dark: PlayDark },
  stop: { light: Stop, dark: StopDark },
  logo: { light: Logo, dark: LogoDark },
  edit: { light: EditIcon, dark: EditIconDark },
  reset: { light: Reset, dark: ResetDark },
  plus: { light: PlusDark, dark: PlusDark },
  min: { light: MinDark, dark: MinDark },
  close: { light: CloseDark, dark: CloseDark },
};

export const getIcon = (
  iconName: keyof typeof icons,
  theme: "light" | "dark"
) => {
  return icons[iconName][theme];
};
