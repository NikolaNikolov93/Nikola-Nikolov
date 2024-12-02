//Sidebar props type
export type SidebarProps = {
  $isOpen: boolean;
  toggleSidebar: () => void;
};

//Sidebar button props
export type SideBaroButtonProps = {
  onClick: () => void;
  $isOpen: boolean;
};

//Theme props
export type ThemeProps = {
  $isDarkTheme: boolean;
};

//Theme context type
export type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

//Certificate type
export type CertificateType = {
  certificateImg: string;
  dateFinished: string;
  grade: number;
  issuedBy: string;
  name: string;
  id: string;
};

//About section ---> StyledDiv props
export type $StyledDivProps = {
  $url: string;
};

//CertificateCardProps in CertificateCard component
export type CertificateCardProps = {
  id: string;
  name: string;
  url: string;
};
// AboutPage infoPari type
export type infoPair = {
  text: React.ReactNode;
  img: string;
};

//User Type
export type UserType = {
  age: number;
  birthDate?: Date;
  birthYear: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  secondName: string;
};

//FormMessageProps
export type FormMessageProps = {
  status?: "success" | "error";
};
