using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using salesCRMWebApi.Models;

namespace salesCRMWebApi.Controllers
{
    public class ContactCompaniesController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/ContactCompanies
        public IQueryable<ContactCompany> GetContactCompanies()
        {
            return db.ContactCompanies;
        }

        // GET: api/ContactCompanies/5
        [ResponseType(typeof(ContactCompany))]
        public IHttpActionResult GetContactCompany(int id)
        {
            ContactCompany contactCompany = db.ContactCompanies.Find(id);
            if (contactCompany == null)
            {
                return NotFound();
            }

            return Ok(contactCompany);
        }

        // PUT: api/ContactCompanies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactCompany(int id, ContactCompany contactCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactCompany.id)
            {
                return BadRequest();
            }

            db.Entry(contactCompany).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactCompanyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ContactCompanies
        [ResponseType(typeof(ContactCompany))]
        public IHttpActionResult PostContactCompany(ContactCompany contactCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContactCompanies.Add(contactCompany);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ContactCompanyExists(contactCompany.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = contactCompany.id }, contactCompany);
        }

        // DELETE: api/ContactCompanies/5
        [ResponseType(typeof(ContactCompany))]
        public IHttpActionResult DeleteContactCompany(int id)
        {
            ContactCompany contactCompany = db.ContactCompanies.Find(id);
            if (contactCompany == null)
            {
                return NotFound();
            }

            db.ContactCompanies.Remove(contactCompany);
            db.SaveChanges();

            return Ok(contactCompany);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactCompanyExists(int id)
        {
            return db.ContactCompanies.Count(e => e.id == id) > 0;
        }
    }
}