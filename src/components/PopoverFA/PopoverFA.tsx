import React, { useState } from "react";
import * as S from "./styled";
import { Popover, PopoverProps } from "antd";
import "./styles.scss";
import CloseLarge from "./CloseLarge";

type Props = {
  typeBorder?: "growth" | Omit<string, "growth">;
  closeIcon?: React.ReactNode;
  title?: React.ReactNode | (() => React.ReactNode);
  isPopover?: boolean;

  children: React.ReactNode;
} & Omit<PopoverProps, "title">;

function PopoverFA({
  typeBorder = "",
  title = "",
  isPopover = true,
  children,
  closeIcon = <CloseLarge width={15} height={15} />,
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
