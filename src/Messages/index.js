const messages = {
    email: {
        required: 'Email is required',
        not_valid: 'Email is not valid',
        max_length: 'Email cannot be more than 250 characters'
    },
    fullName: {
        required: 'Full name is required',
        max_length: 'Full name cannot be more than 200 characters',
        min_length: 'Full name cannot be less than 1 character',
        latin: 'Full name must be only Latin chars.',
        two_words: 'Full name must contain two words and space between of them'
    },
    password: {
        required: 'Password is required',
        max_length: 'Password cannot be more than 30 characters',
        min_length: 'Password cannot be less than 10 characters',
        regex_not_match_number: 'Password must contain 1 number symbol',
        regex_not_match_uppercase: 'Password must contain 1 uppercase symbol',
        regex_not_match_lowercase: 'Password must contain 1 lowercase symbol',
        regex_not_match_special_character: 'Password must contain 1 special character',
    }
};

export default messages;