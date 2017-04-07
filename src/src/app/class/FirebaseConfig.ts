export module FirebaseConfig {

    var config: any;

    export function Get() {
        config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            storageBucket: "",
            messagingSenderId: ""
        };

        return config;
    }
}
