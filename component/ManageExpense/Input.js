import { StyleSheet, Text, TextInput, View } from "react-native";

import { GlobalStyle } from "../../constants/style";

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: GlobalStyle.colors.primary100,
    marginBottom: 5,
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    color: GlobalStyle.colors.primary700,
    padding: 6,
    borderRadius: 8,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyle.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyle.colors.error50,
  },
});
