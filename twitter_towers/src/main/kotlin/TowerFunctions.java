import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TowerFunctions {
    // Scanner object for user input
    Scanner in = new Scanner(System.in);

    // Function to calculate the area or perimeter of a rectangular tower based on its dimensions
    public static void rectangularTower(int height, int width){
        if(height == width || Math.abs(height-width)>5){
            // If height equals width or the absolute difference is greater than 5, calculate area
            System.out.println("The tower's area: " + height * width);
            System.out.println();
        }
        else {
            // Otherwise, calculate perimeter
            System.out.println("The tower's perimeter: " + 2 * (height + width));
            System.out.println();
        }
    }

    // Function to handle triangular tower operations
    public static void triangularTower(int height, int width, Scanner in){
        // Present options for triangular tower
        PresentTriangularOptions();
        int choice = in.nextInt();

        if(choice==1){
            // Calculate the perimeter of the triangle
            double hypotenuse = FindingHypotenuseByPythagoreanTheorem(height, width);
            double perimeter = 2 * hypotenuse + width;
            System.out.println("The tower's perimeter: " + perimeter);
            System.out.println();
        }
        else if (choice==2) {
            // Print the triangle if conditions are met
            if(width % 2 == 0 || width > height * 2){
                System.out.println("The tower cannot be printed");
                System.out.println();
            }else {
                printTriangular(height, width);
            }
        }
    }

    // Function to print a triangular tower
    private static void printTriangular(int height, int width){
        // Calculate odd numbers for constructing the triangle
        List<Integer> oddNumbers = oddNumbersCnt(width);

        if(oddNumbers.size()==0){
            oddNumbers.add(1);
        }

        int linesPerNumber = (height-2)/oddNumbers.size();
        int extraLines = (height-2)%oddNumbers.size();
        StringBuilder spaces=new StringBuilder();

        for (int j = 0; j < Math.floor(width/2); j++) {
            spaces.append(" ");
        }

        StringBuilder stars = new StringBuilder("*");
        String starsToAdd = "**";

        System.out.print(spaces);
        System.out.println(stars);
        if (oddNumbers.get(0)!=1) {
            stars.append(starsToAdd);
        }
        if(spaces.length()>1){
            spaces.deleteCharAt(0);
        }

        for (int j = 0; j < extraLines; j++) {
            System.out.print(spaces);
            System.out.println(stars);
        }

        for (int i = 0; i < oddNumbers.size(); i++) {

            for (int j = 0; j < linesPerNumber; j++) {
                System.out.print(spaces);
                System.out.println(stars);
            }

            if (spaces.length() > 0) {
                spaces.deleteCharAt(0);
            }
                stars.append(starsToAdd);

        }
        System.out.println(stars);
    }

    // Function to present options for triangular tower
    private  static void PresentTriangularOptions(){
        System.out.println("Choose an option:");
        System.out.println("1. Calculate the perimeter of the triangle");
        System.out.println("2. Print the triangle");
        System.out.println("Enter your choice:");
    }

    // Function to generate a list of odd numbers up to a given number
    private static List<Integer> oddNumbersCnt(int num){
        List<Integer> oddNumbers = new ArrayList<>();
        for (int i = 3; i < num; i+=2) {
                oddNumbers.add(i);
        }
        return oddNumbers;
    }

    // Function to calculate the hypotenuse of a right triangle using the Pythagorean theorem
    private static double  FindingHypotenuseByPythagoreanTheorem(int height, int width){
        double halfWidth = width/2;
        double hypotenuse = Math.sqrt((Math.pow(halfWidth,2)+(Math.pow(height, 2))));
        return hypotenuse;
    }

}
