#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    int accountNumber;
    string accountHolder;
    float balance;

public:
    // Function to open an account (defined inside the cl1
    void openAccount(){
	
        cout << "Enter Account Number: ";
        cin >> accountNumber;
        cin.ignore(); // Clear newline before getline		
        cout << "Enter Account Holder's Name: ";
        getline(cin, accountHolder);
        cout << "Enter Initial Balance: ";
        cin >> balance;
    }

    // Function to display account information (inside the class)
    void displayAccount() {
        cout << "\n--- Account Information ---\n";
        cout << "Account Number  : " << accountNumber << endl;
        cout << "Account Holder  : " << accountHolder << endl;
        cout << "Account Balance : $" << balance << endl;
    }

    // Declare deposit and withdraw functions
    void depositMoney(float amount);
    void withdrawMoney(float amount);
};

// Function to deposit money (defined outside the class)
void BankAccount::depositMoney(float amount) {
    if (amount > 0) {
        balance += amount;
        cout << "Deposited $" << amount << " successfully.\n";
    } else {
        cout << "Invalid deposit amount.\n";
    }
}

// Function to withdraw money (defined outside the class)
void BankAccount::withdrawMoney(float amount) {
    if (amount <= balance && amount > 0) {
        balance -= amount;
        cout << "Withdrew $" << amount << " successfully.\n";
    } else {
        cout << "Insufficient balance or invalid amount.\n";
    }
}

// Main program to manage multiple accounts dynamically
int main() {
    int n;
    cout << "Enter number of accounts to create: ";
    cin >> n;

    // Dynamically allocate array of pointers to BankAccount
    BankAccount* accounts[n];

    // Open accounts
    for (int i = 0; i < n; i++) {
        cout << "\nOpening Account " << i + 1 << ":\n";
        accounts[i] = new BankAccount;
        accounts[i]->openAccount();
    }

    // Perform operations
    int choice, accIndex;
    float amount;
    do {
        cout << "\n--- Menu ---\n";
        cout << "1. Deposit\n2. Withdraw\n3. Display Account\n4. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice >= 1 && choice <= 3) {
            cout << "Enter account number (1 to " << n << "): ";
            cin >> accIndex;
            if (accIndex < 1 || accIndex > n) {
                cout << "Invalid account number.\n";
                continue;
            }
            BankAccount* acc = accounts[accIndex - 1];

            switch (choice) {
                case 1:
                    cout << "Enter amount to deposit: ";
                    cin >> amount;
                    acc->depositMoney(amount);
                    break;
                case 2:
                    cout << "Enter amount to withdraw: ";
                    cin >> amount;
                    acc->withdrawMoney(amount);
                    break;
                case 3:
                    acc->displayAccount();
                    break;
            }
        }
    } while (choice != 4);

    // Deallocate memory
    for (int i = 0; i < n; i++) {
        delete accounts[i];
    }

    cout << "All accounts deleted. Program ended.\n";
    return 0;
}

