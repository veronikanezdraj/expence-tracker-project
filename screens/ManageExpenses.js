import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";

function ManageExpenses({ route, navigation }) {
  const editedExpensedId = route.params?.expenseId;
  const isEditing = !!editedExpensedId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={40}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpenses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
