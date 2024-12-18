import React, { useState } from 'react';
import { Stack, Button, Dialog, DialogTitle, Typography, DialogContent, DialogActions, Snackbar, Box, Alert, AlertTitle } from '@mui/material';
import './App.css';

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Stack direction="row">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      </Stack>
      <Dialog
        open={modalOpen}
        onClose={(_, reason) => {
          if (reason !== "escapeKeyDown") return;
          setModalOpen(false);
        }}
      >
        <DialogTitle>
          <Typography variant="h4" noWrap>
            Dialog Header
          </Typography>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <Typography>Press &quot;Escape&quot; to close me</Typography>
        </DialogContent>
        <DialogActions data-testid="modal-buttons-box" sx={{ p: 2 }}>
          <Button onClick={() => setSnackbarOpen(true)}>Open Toast</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={(_, reason) => {
          if (reason !== "escapeKeyDown") return;
          setSnackbarOpen(false);
        }}
      >
        <Box>
          <Alert>
            <AlertTitle sx={{ textAlign: "left" }}>Toast Title</AlertTitle>
            Press &quot;Escape&quot; to close me
          </Alert>
        </Box>
      </Snackbar>
    </div>
  );
}

export default App;
