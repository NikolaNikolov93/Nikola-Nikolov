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
