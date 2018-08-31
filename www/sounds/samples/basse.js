var BASSE_SAMPLE = "data:audio/wav;base64,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";