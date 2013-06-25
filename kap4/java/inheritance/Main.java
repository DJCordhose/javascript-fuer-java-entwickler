package inheritance;

public class Main {
    public static void main(String[] args) {
        Male olli = new Male("Olli");
        System.out.println(olli.getName());
        // => "Mr Olli"
        System.out.println(olli.getGender());
        // => "Male"
        System.out.println(olli instanceof Male);
        // => true
        System.out.println(olli instanceof Person);
        // => true
        System.out.println(olli instanceof Object);
        // => true
    }
}
