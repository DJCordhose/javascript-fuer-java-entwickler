package inheritance;

public class Male extends Person {
    public Male(String name) {
        super(name, "Male" );
    }

    @Override
    public String getName() {
        return "Mr " + super.getName();
    }
}
