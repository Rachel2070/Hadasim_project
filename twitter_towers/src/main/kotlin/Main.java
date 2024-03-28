import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // Display welcome message and tower options in a loop
        while (true) {
            presentTowerOptions();
            int choice = in.nextInt();

            // Handle user choice
            if (choice == 1) {
                handleRectangularTower(in);
            } else if (choice == 2) {
                handleTriangularTower(in);
            } else if (choice == 3) {
                // Exit the program
                System.out.println("Exiting program.");
                break;
            } else {
                // Display error message for invalid input
                System.out.println("Invalid input, please try again");
                System.out.println();
            }
        }
    }

    // Method to display tower options
    private static void presentTowerOptions() {
        System.out.println("1. Rectangular Tower");
        System.out.println("2. Triangular Tower");
        System.out.println("3. Exit");
        System.out.println("Enter your choice:");
    }

    // Method to handle rectangular tower input
    private static void handleRectangularTower(Scanner in) {
        // Prompt user to enter height and width of rectangular tower
        System.out.println("Enter height (positive integers):");
        int height = in.nextInt();
        System.out.println("Enter width (positive integers):");
        int width = in.nextInt();

        // Call method to calculate area or perimeter of rectangular tower
        TowerFunctions.rectangularTower(height, width);
    }

    // Method to handle triangular tower input
    private static void handleTriangularTower(Scanner in) {
        // Prompt user to enter height and width of triangular tower
        System.out.println("");
        System.out.println("Enter height (positive integers):");
        int height = in.nextInt();
        System.out.println("Enter width (positive integers, greater than 1)");
        int width = in.nextInt();

        // Call method to calculate perimeter or print triangular tower
        TowerFunctions.triangularTower(height, width, in);
    }
}
