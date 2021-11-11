require 'date'

SUNDAY="Sunday"
FIRST_DAY="01"
DAY_IN_SECONDS=86400

start_date = Time.local(1901)
end_date = Time.local(2000, 12, 31)
sunday_counter=0

while end_date>=start_date
  if end_date.strftime("%A")==SUNDAY and end_date.strftime("%d")==FIRST_DAY
    sunday_counter+=1
  end
  end_date-=DAY_IN_SECONDS
end

p sunday_counter