import React, { useRef, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useMenuPosition } from "src/utils";
import "./style.scss";
import { Icon } from "src/widgets";
const Container = styled.div`
  ${(props) => props.styles.width && `min-width:${props.styles.width}px`};
`;

interface Props extends MenuProps {
  onChange?: (value: string | number) => void;
  onChangeOpen?: (value?: boolean) => void;
}

export const DropMenuIcon: React.FC<Props> = (props) => {
  const {
    activator,
    menuItems,
    disabled,
    maxHeight = 260,
    inline = false,
    open,
    value,
  } = props;

  // state
  const [state, setState] = useState<{
    open: boolean;
    position: {
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
      width?: number;
    };
  }>({
    open: false,
    position: {},
  });
  const activatorRef = useRef(null);
  const selectedItemRef = useRef(null);
  const position = useMenuPosition(activatorRef, "vertical");

  const _className = useMemo(() => {
    const class_name = ["defi-drop-menu"];
    inline && class_name.push("inline");
    return class_name.join(" ");
  }, [inline]);

  useEffect(() => {
    setState({
      ...state,
      open,
    });
  }, [open]);

  useEffect(() => {
    props.onChangeOpen && props.onChangeOpen(state.open);
  }, [state.open]);

  useEffect(() => {
    const handleClickOutside = (event: Event): void => {
      if (activatorRef && activatorRef.current) {
        if (activatorRef.current.contains(event.target)) {
          return;
        } else {
          setState({ ...state, open: false });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activatorRef]);

  useEffect(() => {
    state.open && selectedItemRef.current?.scrollIntoView();
  }, [state.open]);

  const onMenuItemClick = (value: MenuItemProps): void => {
    setState({ ...state, open: false });
    if (typeof value === "object" && value.action) {
      value.action();
    }
    props.onChange &&
      props.onChange(typeof value === "string" ? value : value.value);
  };

  const getRef = (item: MenuItemProps): any => {
    if (typeof item === "object") {
      return item.value === value ? { ref: selectedItemRef } : {};
    } else {
      return item === value ? { ref: selectedItemRef } : {};
    }
  };

  return (
    <div className={_className} ref={activatorRef}>
      <div
        className="content"
        onClick={() => !disabled && setState({ ...state, open: !state.open })}
      >
        {activator}
        <span>
          <Icon name="arrow-down" color="#FFFFFF" />
        </span>
      </div>
      <Container
        className={`menu-container${state.open ? " open" : ""}`}
        styles={position}
        maxHeight={maxHeight}
      >
        {Array.isArray(menuItems) ? (
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => onMenuItemClick(item)}
                {...getRef(item)}
              >
                {props.renderItem ? (
                  props.renderItem(item)
                ) : (
                  <div className="content">
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <React.Fragment>
                        <div className="content">
                          {typeof item === "string" ? item : item.label}
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          props.children
        )}
      </Container>
    </div>
  );
};
