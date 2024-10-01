import { useState } from 'react'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Textarea, Button, Group, List, Container } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';


const theme = createTheme({
  /** Put your mantine theme override here */
});

let nextId = 0;

function App() {

  const [remForm, setRemForm] = useState(
      {
        id: 0,
        remember: '',
        date: null
      });
  const [items, setItem] = useState([]);
  
  const handleRememberChange = (e) => {
    setRemForm({ ...remForm, remember: e.target.value });
  };
  const handleDateChange = (e) => {
    setRemForm({ ...remForm, date: e.target.value });
  };

  const rememberItems = items.map((item) => <List.Item key={item.id}> {item.remember} at {item.date} </List.Item>);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      inputRemember: '',
    },

    validate: {
      inputRemember: (value) => (value.length < 2 ? 'Write at leat 2 chars' : null),
    },
  });

  return (
        
    <MantineProvider theme={theme}>
      <Container>
        
        <form onSubmit={form.onSubmit(function (values) { 
            console.log(values);
            items.push({
              id: nextId++,
              remember: values.inputRemember,
            });
          })}>
          <Textarea
            label="What to remember"
            placeholder="What to remember"
            key={form.key('inputRemember')}
            onChange={handleRememberChange}
            {...form.getInputProps('inputRemember')}
          />

          <DatePickerInput
            label="Pick date"
            placeholder="Pick date"
            key={form.key('date')}
            onChange={handleDateChange}
            {...form.getInputProps('date')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>

        <List>
          {rememberItems}
        </List>
      </Container>
      
    </MantineProvider>
  );
}

export default App