import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Hello, and welcome to Twitter Towers");
        System.out.println("These are our towers options:");
        while (true) {
            presentTowerOptions();
            int choice = in.nextInt();

            if (choice == 1) {
                handleRectangularTower(in);
            }else if (choice == 2) {
                handleTriangularTower(in);
            } else if (choice == 3) {
                System.out.println("Exiting program.");
                break;
            } else {
                System.out.println("Invalid input, please try again");
                System.out.println();
            }
        }
    }

    private static void presentTowerOptions(){
        System.out.println("1. Rectangular Tower");
        System.out.println("2. Triangular Tower");
        System.out.println("3. Exit");
        System.out.println("Enter your choice:");
    }

    private static void handleRectangularTower(Scanner in) {
        System.out.println("Enter height (positive integers):");
        int height = in.nextInt();
        System.out.println("Enter width (positive integers):");
        int width = in.nextInt();

        TowerFunctions.rectangularTower(height, width);
    }

    private static void handleTriangularTower(Scanner in) {
        System.out.println("");
        System.out.println("Enter height (positive integers):");
        int height = in.nextInt();
        System.out.println("Enter width (positive integers, greater than 1)");
        int width = in.nextInt();

        TowerFunctions.triangularTower(height, width, in);
    }

    }
