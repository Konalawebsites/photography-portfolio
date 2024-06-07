import React from 'react';
import { Box, Button, Form, FormField, Grid, TextArea, TextInput } from 'grommet';

const ContactForm = () => {
  return (
    <Box align="center" pad="large">
      <Box width="large">
        <Form
          onSubmit={({ value }) => {
            // handle form submission
            console.log(value);
          }}
        >
          {/* Row 1 of form */}
          <Grid columns={['1/2', '1/2']} gap="medium">
            <FormField name="name" htmlFor="name-input" label="Name">
              <TextInput id="name-input" name="name" placeholder="Name" />
            </FormField>
            <FormField name="email" htmlFor="email-input" label="Email">
              <TextInput id="email-input" name="email" type="email" placeholder="Email address" />
            </FormField>
          </Grid>
          {/* Row 2 of form */}
          <FormField name="subject" htmlFor="subject-input" label="Subject">
            <TextInput id="subject-input" name="subject" placeholder="Subject" />
          </FormField>
          {/* Row 3 of form */}
          <FormField name="message" htmlFor="message-input" label="Message">
            <TextArea id="message-input" name="message" rows={3} placeholder="Message" />
          </FormField>
          <Box direction="row" justify="center" margin={{ top: 'medium' }}>
            <Button type="submit" label="Submit" secondary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default ContactForm;