import { ArrowPlaceholder, Arrow } from "./ArrowButton.styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type ArrowButtonProps = {
  scrollToSection: () => void;
  $isUp: boolean;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  scrollToSection,
  $isUp,
}) => {
  return (
    <ArrowPlaceholder
      $isUp={$isUp}
      onClick={scrollToSection}
      initial={{ x: 100 }}
      animate={{
        x: 0,
      }}
      transition={{ duration: 0.5 }}
      exit={{ x: 100 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
    >
      <Arrow $isUp={$isUp}>
        {$isUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Arrow>
    </ArrowPlaceholder>
  );
};

export default ArrowButton;
