chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "paste") {
        pasteTextToAIChat(request.text);
    }
});

function pasteTextToAIChat(text) {
    // Try multiple methods to find the input field
    const possibleInputs = [
        document.querySelector('textarea[data-id="root"]'), // Copilot
        document.querySelector('textarea[id="searchbox"]'), // Copilot alternate
        document.querySelector('label[data-input] textarea'), // Structure you provided
        document.querySelector('textarea[placeholder*="Message"]'), // Generic
        document.querySelector('div[contenteditable="true"]') // Contenteditable div
    ];

    const input = possibleInputs.find(el => el !== null);

    if (input) {
        // Save the original value
        const originalValue = input.value || input.textContent;

        // Method 1: Direct assignment
        if (input.tagName === 'TEXTAREA' || input.tagName === 'INPUT') {
            input.value = text;
        } else if (input.contentEditable === 'true') {
            input.textContent = text;
        }

        // Method 2: Simulate typing
        simulateTyping(input, text);

        // Method 3: Clipboard API
        navigator.clipboard.writeText(text).then(() => {
            input.focus();
            document.execCommand('paste');
        }).catch(err => console.error('Failed to write to clipboard', err));

        // Trigger events
        ['input', 'change', 'keydown', 'keyup', 'keypress'].forEach(eventType => {
            input.dispatchEvent(new Event(eventType, { bubbles: true }));
        });

        // Update any associated data attributes
        const label = input.closest('label[data-input]');
        if (label) {
            label.setAttribute('data-input', text);
        }

        // If the value didn't change, revert to original and log an error
        setTimeout(() => {
            if ((input.value || input.textContent) === originalValue) {
                console.error('Failed to insert text');
                input.value = originalValue;
                input.textContent = originalValue;
            }
        }, 100);

        // Focus the input and move cursor to end
        input.focus();
        if (input.setSelectionRange) {
            input.setSelectionRange(text.length, text.length);
        }
    } else {
        console.error('Could not find input element');
    }
}

function simulateTyping(element, text) {
    const inputEvent = new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        inputType: 'insertText',
        data: text
    });
    element.dispatchEvent(inputEvent);
}