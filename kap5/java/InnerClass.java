public class InnerClass {
    public static void main(String[] args) {
        Runnable innerClass = createInnerClass(10);
        innerClass.run();
    }

    private static Runnable createInnerClass(final int i) {
        final String name = "Olli";
        return new Runnable() {
            @Override
            public void run() {
                System.out.println(name + i);
            }
        };
    }
}
