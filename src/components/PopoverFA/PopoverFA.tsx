import React, { useState } from "react";
import * as S from "./styled";
import { Popover, PopoverProps } from "antd";
import "./styles.scss";
import CloseLarge from "./CloseLarge";

type Props = {
  typeBorder?: "growth" | Omit<string, "growth">;
  closeIcon?: React.ReactNode;
  isPopover?: boolean;

  children: React.ReactNode;
} & PopoverProps;

function PopoverFA({
  typeBorder = "",
  title = "",
  isPopover = true,
  closeIcon = <CloseLarge width={15} height={15} />,
  children,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      overlayClassName={`popover-full-access ${typeBorder}`}
      onVisibleChange={handleOpenChange}
      visible={isPopover ? open : false}
      trigger="click"
      placement="top"
      title={
        <S.Title>
          {title}
          <S.Close onClick={hide}>{closeIcon}</S.Close>
        </S.Title>
      }
      {...props}
    >
      {children}
    </Popover>
  );
}

export default PopoverFA;
