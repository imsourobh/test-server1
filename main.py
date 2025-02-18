import streamlit as st

def main():
    st.title("Full Name")
    
    # Taking user input
    first_name = st.text_input("Enter your first name:")
    last_name = st.text_input("Enter your last name:")
    
    # Display full name when both fields are filled
    if first_name and last_name:
        full_name = f"{first_name} {last_name}"
        st.success(f"Your full name is: {full_name}")
    
if __name__ == "__main__":
    main()
