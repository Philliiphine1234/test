// ─── TEST VERSION – 3 QUESTIONS ──────────────────────────────────────
const QUESTION_BANK = [
    {
        id: 1,
        subject: 'Anatomy',
        text: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid', 'Rome'],
        answer: 1,
        meta: 'Test',
        explanation: 'Paris is the capital of France.'
    },
    {
        id: 2,
        subject: 'Physiology',
        text: 'Which of the following is the largest organ in the human body?',
        options: ['Liver', 'Heart', 'Brain', 'Skin', 'Lung'],
        answer: 3,
        meta: 'Test',
        explanation: 'The skin is the largest organ in the human body.'
    },
    {
        id: 3,
        subject: 'Pharmacology',
        text: 'Which of the following is used to treat opioid overdose?',
        options: ['Methadone', 'Buprenorphine', 'Naloxone', 'Naltrexone', 'Clonidine'],
        answer: 2,
        meta: 'Test',
        explanation: 'Naloxone is the specific antidote for opioid overdose.'
    }
];

console.log('✅ TEST questions.js loaded! Total questions:', QUESTION_BANK.length);