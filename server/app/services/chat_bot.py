import json


messages = [
    {
        "request": ['hi', 'hello', 'hey', 'i want'],
        "response": 'Hello, how are you? I can help you with your loan application, can you send me your username?', # noqa
        "response_type": 0
    },
    {
        "request": ['username', 'name'],
        "response": 'Ok, now send me your password',
        "response_type": 0

    },
    {
        "request": ['right-password'],
        "response": 'Welcome to our bank, how can I help you?!',
        "response_type": 0
    },
    {
        "request": ['wrong-password'],
        "response": 'Sorry, your username or password is wrong, please try again or create a new account', # noqa
        "response_type": 0
    },
    {
        "request": ['loan'],
        "response": [['a. Do you want to apply for a loan?'], ['b. Loan conditions'], ['c. Help']], # noqa
        "response_type": 1
    },
    {
        "request": ['a', 'apply'],
        "response": 'Please fill out the form on "loans" page',
        "response_type": 0

    },
    {
        "request": ['b', 'conditions'],
        "response": f"Loan conditions: 1. Loan amount: 1000-10000$, 2. Loan term: 1-5 years, 3. Interest rate: 5-10%", # noqa
        "response_type": 0
    },
    {
        "request": ['c', 'help'],
        "response": 'You can ask me about the loan conditions or apply for a loan', # noqa
        "response_type": 0
    },
    {
        "request": ['bye', 'goodbye'],
        "response": 'Bye, have a nice day!',
        "response_type": 2
    }
]


# TODO: change this function to use a NLP library
def get_bot_response(input_text: str) -> str:
    input_words = input_text.lower().split()

    for message in messages:
        requests = message["request"]
        if any(request in input_words for request in requests):
            response = message["response"]
            if isinstance(response, list):
                return [json.dumps(response), message["response_type"]]
            return [response, message["response_type"]]

    return ["I'm sorry, I didn't understand your request.", 0]
