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
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.8,
      }}
    >
      <Arrow
        $isUp={$isUp}
        initial={{ y: 0, opacity: 1, scale: 1 }}
        animate={{ y: $isUp ? -10 : 10, opacity: [0, 1, 0], scale: 1.1 }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
        }}
      >
        {$isUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Arrow>
    </ArrowPlaceholder>
  );
};

export default ArrowButton;
