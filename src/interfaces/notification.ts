export type NotificationSettings = {
  title: string;
  description: string;
  isError: boolean;
};
export type ChangeNotificationSettings = {
  title?: string;
  description?: string;
  isError?: boolean;
};

export type NotificationProps = {
  isActive: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isError?: boolean;
  title: string;
  description: string;
};
