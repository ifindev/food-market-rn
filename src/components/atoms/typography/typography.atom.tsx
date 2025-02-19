import React from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

type TypographyColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'white';

type TypographyProps = TextProps & {
  variant?: TypographyColorVariant;
  bold?: boolean;
};

// #region BODY12/BASE
function Base({
  variant = 'primary',
  children,
  bold,
  style,
  ...rest
}: TypographyProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles.body12,
        colors[variant],
        bold && styles.bold,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
}
// #endregion

// #region BODY14
function Body14(props: TypographyProps) {
  return <Base {...props} style={[styles.body14]} {...props} />;
}
// #endregion

// #region BODY16
function Body16(props: TypographyProps) {
  return <Base {...props} style={[styles.body16]} {...props} />;
}
// #endregion

// #region BODY18
function Body18(props: TypographyProps) {
  return <Base {...props} style={[styles.body18]} {...props} />;
}
// #endregion

// #region BODY20
function Body20(props: TypographyProps) {
  return <Base {...props} style={[styles.body20]} {...props} />;
}
// #endregion

// #region HEADING2
function Heading2(props: TypographyProps) {
  return <Base {...props} bold style={[styles.heading2]} {...props} />;
}
// #endregion

// #region HEADING2
function Heading1(props: TypographyProps) {
  return <Base {...props} bold style={[styles.heading1]} {...props} />;
}
// #endregion

// #region TEXT STYLES
const styles = StyleSheet.create({
  base: {
    fontWeight: 300,
  },
  body12: {
    fontSize: 12,
  },
  body14: {
    fontSize: 14,
  },
  body16: {
    fontSize: 16,
  },
  body18: {
    fontSize: 18,
  },
  body20: {
    fontSize: 20,
  },
  heading2: {
    fontSize: 22,
  },
  heading1: {
    fontSize: 32,
  },
  bold: {
    fontWeight: 500,
  },
});
// #endregion

// #region COLOR STYLES
const colors: Record<TypographyColorVariant, {color: string}> = {
  primary: {
    color: '#020202',
  },
  secondary: {
    color: '#8D92A3',
  },
  success: {
    color: '#1ABC9C',
  },
  danger: {
    color: '#D9435E',
  },
  white: {
    color: 'white',
  },
};
// #endregion

// #region EXPORT
const Typography = Object.assign(Base, {
  Body14,
  Body16,
  Body18,
  Body20,
  Heading2,
  Heading1,
});

export default Typography;
// #endregion
