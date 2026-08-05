export const submitBooking = async (data: Record<string, any>) => {
  try {
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit booking');
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting booking", error);
    return { success: false, error: "Failed to submit booking" };
  }
};
