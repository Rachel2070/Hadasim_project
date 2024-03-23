import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TowerFunctions {
    Scanner in = new Scanner(System.in);
    public static void rectangularTower(int height, int width){
        if(height == width || Math.abs(height-width)>5){
            System.out.println("The tower's area: " + height * width);
            System.out.println();
        }
        else {
            System.out.println("The tower's perimeter: " + 2 * (height + width));
            System.out.println();
        }
    }

    public static void triangularTower(int height, int width, Scanner in){
        System.out.println("Choose an option:");
        System.out.println("1. Calculate the perimeter of the triangle");
        System.out.println("2. Print the triangle");
        System.out.println("Enter your choice:");

        int choice = in.nextInt();

        if(choice==1){
            int perimeter = 2 * height + width;
            System.out.println("The tower's perimeter: " + perimeter);
            System.out.println();
        }
        else if (choice==2) {
            if(width % 2 == 0 || width > height * 2){
                System.out.println("The triangle cannot be printed");
                System.out.println();
            }else {
                printTriangular(height, width);
            }
        }
    }

    private static void printTriangular(int height, int width){
        List<Integer> oddNumbers = oddNumbersCnt(width);
        int linesPerNumber = (height-2)/oddNumbers.size();
        int extraLines = (height-2)%oddNumbers.size();
        StringBuilder spaces=new StringBuilder();

        for (int j = 0; j < width/2; j++) {
            spaces.append(" ");
        }

        StringBuilder stars = new StringBuilder("*");
        String starsToAdd = "**";

        System.out.print(spaces);
        System.out.println(stars);

        stars.append(starsToAdd);
        spaces.deleteCharAt(0);

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

    private static List<Integer> oddNumbersCnt(int num){
        List<Integer> oddNumbers = new ArrayList<>();
        for (int i = 3; i < num; i+=2) {
                oddNumbers.add(i);
        }
        return oddNumbers;
    }

}
